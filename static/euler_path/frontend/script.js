const baseUrl = 'https://deploy-five-plum.vercel.app/';

// Cytoscape instance for graph visualization
let cy = null;
let incorrectAttempts = 0;  // Track the number of incorrect attempts
let currentSolution = [];   // Store the correct solution for the current problem
let progress = { easy: false, medium: false, hard: false };

document.getElementById('fetch-problem').addEventListener('click', async () => {
    const difficulty = document.getElementById('difficulty').value;

    try {
        const response = await fetch(`${baseUrl}/get_problem`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ level: difficulty })
        });

        if (!response.ok) throw new Error('Failed to fetch problem.');

        const problem = await response.json();
        console.log("Fetched Problem:", problem); // Debugging log

        document.getElementById('problem-description').textContent = problem.description;

        // Get the graph data
        const graphData = problem.graph;

        // Log the graph data to ensure it's correctly fetched
        console.log("Graph Data:", graphData);

        // Ensure graphData is valid
        if (!graphData || !graphData.vertices || !graphData.edges) {
            throw new Error('Invalid graph data.');
        }

        const nodes = graphData.vertices.map(v => ({ data: { id: v } }));
        const edges = graphData.edges.map(e => ({ data: { source: e[0], target: e[1] } }));

        // Store the correct solution for comparison later
        currentSolution = graphData.solution;

        // Create the Cytoscape graph
        createCytoscapeGraph(nodes, edges, graphData.startVertex);

        // Show the problem section
        document.getElementById('problem-section').classList.remove('hidden');
        document.getElementById('result-message').textContent = '';  // Clear result message
        document.getElementById('new-problem').classList.add('hidden'); // Hide "Try Another Problem" button
        incorrectAttempts = 0;  // Reset incorrect attempt counter
        document.getElementById('solution-input').value = '';  // Clear the solution input field
    } catch (error) {
        console.error('Error fetching problem:', error); // Log errors for debugging
        alert('Error fetching problem: ' + error.message);
    }
});

document.getElementById('submit-solution').addEventListener('click', async () => {
    const difficulty = document.getElementById('difficulty').value;
    const description = document.getElementById('problem-description').textContent;
    const userInput = document.getElementById('solution-input').value;

    // Normalize the user input:
    // 1. Convert to lowercase
    // 2. Remove commas and extra spaces
    const normalizedUserInput = userInput
        .toLowerCase()
        .replace(/[\s,]+/g, '');  // Remove spaces and commas

    // Normalize the correct solution:
    const normalizedSolution = currentSolution
        .map(vertex => vertex.toLowerCase())  // Convert each vertex to lowercase
        .join('');  // Join the array into a string without commas

    try {
        const response = await fetch(`${baseUrl}/check_solution`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ level: difficulty, description, solution: currentSolution })
        });

        if (!response.ok) throw new Error('Failed to submit solution.');

        const result = await response.json();
        let resultMessage = result.correct ? 'Correct Solution!' : 'Incorrect Solution. Try Again.';

        // Check if the normalized user input matches the normalized solution
        if (normalizedUserInput === normalizedSolution) {
            resultMessage = 'Correct Solution!';
            incorrectAttempts = 0; // Reset incorrect attempts after correct solution
            progress[difficulty] = true;
            updateProgress();
        } else {
            resultMessage = 'Incorrect Solution. Try Again.';
            incorrectAttempts++;
            // After 3 wrong attempts, show the correct solution
            if (incorrectAttempts >= 3) {
                document.getElementById('result-message').textContent = `Incorrect. The correct solution is: ${currentSolution.join(', ')}`;
                document.getElementById('new-problem').classList.remove('hidden');
                return;
            }
        }

        document.getElementById('result-message').textContent = resultMessage;

        // If the solution is correct, give the option to try another problem
        if (result.correct) {
            document.getElementById('new-problem').classList.remove('hidden');
        }
    } catch (error) {
        alert('Error submitting solution: ' + error.message);
    }
});

document.getElementById('new-problem').addEventListener('click', () => {
    document.getElementById('problem-section').classList.add('hidden');
    document.getElementById('solution-input').value = '';
    document.getElementById('result-message').textContent = '';
});

function createCytoscapeGraph(nodes, edges, startVertex) {
    // Destroy the old Cytoscape instance if it exists
    if (cy) {
        cy.destroy();
    }

    // Create a new Cytoscape instance with the new nodes and edges
    cy = cytoscape({
        container: document.getElementById('graph-container'),
        elements: [...nodes, ...edges],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#0074d9',
                    'label': 'data(id)',
                    'color': '#fff',
                    'font-size': '14px',
                    'text-halign': 'center',
                    'text-valign': 'center'
                }
            },
            {
                selector: 'node[startVertex="true"]',
                style: {
                    'background-color': '#FF6347',  // Highlight the start vertex (different color)
                    'border-width': 3,
                    'border-color': '#FF4500'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'arrow-scale': 1.5
                }
            },
            {
                selector: 'edge.selected',
                style: {
                    'width': 3,
                    'line-color': '#FF6347', // Bold and red when selected
                    'target-arrow-color': '#FF6347'
                }
            }
        ],
        layout: getLayoutForGraph(nodes.length), // Dynamically choose layout
        userZoomingEnabled: false,  // Disables zooming
        userPanningEnabled: false,  // Disables panning
        zoomingEnabled: false,      // Disables zooming
        panningEnabled: false,      // Disables panning
        boxSelectionEnabled: false  // Disables box selection (dragging to select nodes)
    });

    // Highlight the start vertex by adding a data attribute for style
    cy.$(`#${startVertex}`).data('startVertex', true);

    // Add event listeners for edge selection (toggle bold on click)
    cy.on('tap', 'edge', function(evt) {
        const edge = evt.target;

        // Toggle 'selected' class on the edge when clicked
        if (edge.hasClass('selected')) {
            edge.removeClass('selected');  // Revert to normal style
        } else {
            edge.addClass('selected');  // Apply bold style
        }
    });
}

// Dynamically choose a layout based on the graph size (number of nodes)
function getLayoutForGraph(nodeCount) {
    if (nodeCount <= 3) {
        // For very small graphs, use a preset layout where nodes are manually positioned
        return {
            name: 'preset',
            positions: {
                'A': { x: 100, y: 100 },
                'B': { x: 200, y: 100 },
                'C': { x: 150, y: 200 }
            }
        };
    } else if (nodeCount <= 5) {
        // For small graphs, use a grid layout
        return {
            name: 'grid',
            rows: 2,
            fit: true
        };
    } else {
        // For larger graphs, use a circle layout
        return {
            name: 'circle',
            fit: true
        };
    }
}

function updateProgress() {
    const completed = Object.values(progress).filter(Boolean).length;
    const progressPercentage = Math.round((completed / 3) * 100);
    document.getElementById('progress-circle').style.setProperty('--progress', progressPercentage);
    document.getElementById('progress-text').textContent = `${progressPercentage}%`;
}