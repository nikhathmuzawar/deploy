const questions = [
  {
    question: "What is a graph in mathematics?",
    options: [
      "A collection of nodes and edges",
      "A pictorial representation of data",
      "A tree with weighted edges",
      "A network diagram"
    ],
    answer: "A collection of nodes and edges",
    description: "A graph consists of vertices (nodes) and edges connecting them.",
    topic: "Graph Basics" // Added topic field
  },
  {
    question: "What is a complete graph?",
    options: [
      "A graph where every node is connected to every other node",
      "A graph with no edges",
      "A graph with multiple disconnected components",
      "A graph where all nodes have the same degree"
    ],
    answer: "A graph where every node is connected to every other node",
    description: "In a complete graph, every pair of vertices is connected by a unique edge.",
    topic: "Graph Types"
  },
  {
    question: "What is a graph in mathematics?",
    options: [
      "A collection of nodes and edges",
      "A pictorial representation of data",
      "A tree with weighted edges",
      "A network diagram"
    ],
    answer: "A collection of nodes and edges",
    description: "A graph consists of vertices (nodes) and edges connecting them.",
    topic: "Basics of Graphs"
  },
  {
    question: "What is a complete graph?",
    options: [
      "A graph where every node is connected to every other node",
      "A graph with no edges",
      "A graph with multiple disconnected components",
      "A graph where all nodes have the same degree"
    ],
    answer: "A graph where every node is connected to every other node",
    description: "In a complete graph, every pair of vertices is connected by a unique edge.",
    topic: "Graph Types"
  },
  {
    question: "What is an Eulerian path?",
    options: [
      "A path that visits every edge exactly once",
      "A path that visits every vertex exactly once",
      "A path that forms a cycle",
      "A path that starts and ends at the same vertex"
    ],
    answer: "A path that visits every edge exactly once",
    description: "An Eulerian path traverses each edge of a graph exactly once.",
    topic: "Special Graphs"
  },
  {
    question: "Which of the following is a correct definition of a graph?",
    options: [
      "A graph consists of a set of nodes and edges connecting them",
      "A graph is a set of numbers",
      "A graph only consists of vertices",
      "A graph only consists of edges"
    ],
    answer: "A graph consists of a set of nodes and edges connecting them",
    description: "A graph consists of vertices (nodes) and edges connecting them.",
    topic: "Basics of Graphs"
  },
  {
    question: "In an undirected graph, an edge is defined as:",
    options: [
      "A pair of vertices where the order of vertices matters",
      "A pair of vertices where the order does not matter",
      "A collection of nodes",
      "A directed connection between two vertices"
    ],
    answer: "A pair of vertices where the order does not matter",
    description: "In an undirected graph, edges have no direction; the order of vertices does not matter.",
    topic: "Graph Types"
  },
  {
    question: "What does a complete graph have?",
    options: [
      "No edges",
      "Edges connecting all vertices to all other vertices",
      "Only one vertex",
      "At least one cycle"
    ],
    answer: "Edges connecting all vertices to all other vertices",
    description: "A complete graph has an edge between every pair of vertices.",
    topic: "Graph Types"
  },
  {
    question: "Which of the following is NOT a property of a tree?",
    options: [
      "A tree has no cycles",
      "A tree is connected",
      "A tree is a directed acyclic graph (DAG)",
      "A tree has at least one cycle"
    ],
    answer: "A tree has at least one cycle",
    description: "A tree cannot have any cycles; it is a connected acyclic graph.",
    topic: "Special Graphs"
  },
  {
    question: "What is the maximum number of edges in a simple graph with `n` vertices?",
    options: [
      "n^2",
      "n(n-1)/2",
      "n(n-1)",
      "n^2/2"
    ],
    answer: "n(n-1)/2",
    description: "A simple graph with `n` vertices can have a maximum of `n(n-1)/2` edges.",
    topic: "Graph Theory"
  },
  {
    question: "Which of the following is true for a bipartite graph?",
    options: [
      "All vertices can be colored using one color",
      "The vertices can be divided into two disjoint sets such that there are no edges within a set",
      "Every vertex has an even degree",
      "All edges in the graph are directed"
    ],
    answer: "The vertices can be divided into two disjoint sets such that there are no edges within a set",
    description: "A bipartite graph divides vertices into two disjoint sets, with edges only between the sets.",
    topic: "Special Graphs"
  },
  {
    question: "Which of the following is a feature of a directed graph?",
    options: [
      "Each edge has no direction",
      "Each edge has a direction associated with it",
      "All edges are bidirectional",
      "A directed graph cannot have cycles"
    ],
    answer: "Each edge has a direction associated with it",
    description: "In a directed graph, every edge has a starting and ending vertex.",
    topic: "Graph Types"
  },
  {
    question: "A graph is called \"planar\" if:",
    options: [
      "It can be drawn on a plane without edges crossing",
      "It has only one cycle",
      "It is a directed acyclic graph",
      "It contains exactly two disjoint subgraphs"
    ],
    answer: "It can be drawn on a plane without edges crossing",
    description: "A planar graph can be drawn on a flat plane without any edges crossing each other.",
    topic: "Graph Types"
  },
  {
    question: "What is a subgraph?",
    options: [
      "A graph formed by deleting edges only from the original graph",
      "A graph formed by deleting vertices and edges from the original graph",
      "A graph where all vertices have the same degree",
      "A graph formed by reversing all the edges of the original graph"
    ],
    answer: "A graph formed by deleting vertices and edges from the original graph",
    description: "A subgraph is a graph that is formed by removing some or all vertices and edges of the original graph.",
    topic: "Graph Theory"
  },
  {
    question: "Which of the following is an example of a graph where each edge has a weight or cost associated with it?",
    options: [
      "A simple graph",
      "A directed graph",
      "A weighted graph",
      "A complete graph"
    ],
    answer: "A weighted graph",
    description: "A weighted graph is a graph where each edge is assigned a numerical value or weight.",
    topic: "Graph Types"
  },
  {
    question: "Which of the following is true for a \"regular graph\"?",
    options: [
      "All edges are directed",
      "All vertices have the same degree",
      "Every vertex is connected to exactly one other vertex",
      "The graph contains only one cycle"
    ],
    answer: "All vertices have the same degree",
    description: "A regular graph is one where every vertex has the same degree.",
    topic: "Graph Theory"
  },
  {
    question: "What type of graph is represented by a flowchart?",
    options: [
      "Bipartite graph",
      "Directed acyclic graph (DAG)",
      "Tree",
      "Complete graph"
    ],
    answer: "Directed acyclic graph (DAG)",
    description: "A flowchart is often represented as a Directed Acyclic Graph (DAG), where there are directed edges and no cycles.",
    topic: "Graph Types"
  },
  {
    question: "Which of the following best describes a \"Hamiltonian cycle\"?",
    options: [
      "A cycle that visits every vertex of the graph exactly once",
      "A cycle that visits every edge of the graph exactly once",
      "A cycle that starts and ends at the same vertex but does not visit every vertex",
      "A cycle in a directed graph"
    ],
    answer: "A cycle that visits every vertex of the graph exactly once",
    description: "A Hamiltonian cycle is a cycle that includes every vertex in the graph exactly once.",
    topic: "Special Graphs"
  },
  {
    question: "A \"tree\" with `n` vertices has how many edges?",
    options: [
      "n - 1",
      "n + 1",
      "2n - 1",
      "n^2"
    ],
    answer: "n - 1",
    description: "A tree with `n` vertices always has exactly `n - 1` edges.",
    topic: "Special Graphs"
  },
  {
    question: "Which of the following is true about a \"complete bipartite graph\" \( K_{m,n} \)?",
    options: [
      "All vertices in the graph are of equal degree",
      "It has exactly two sets of vertices, each with `m` and `n` vertices respectively, and every vertex in set `m` is connected to every vertex in set `n`",
      "It is a graph that contains exactly one cycle",
      "All edges are undirected"
    ],
    answer: "It has exactly two sets of vertices, each with `m` and `n` vertices respectively, and every vertex in set `m` is connected to every vertex in set `n`",
    description: "A complete bipartite graph connects two disjoint sets of vertices, with every vertex in one set connected to all vertices in the other set.",
    topic: "Special Graphs"
  },
  {
    question: "What is \"graph isomorphism\"?",
    options: [
      "Two graphs that are identical in terms of edge weights",
      "Two graphs that have the same number of vertices and edges but may differ in layout",
      "Two graphs that have no common vertices or edges",
      "Two graphs that can be transformed into each other by renaming vertices"
    ],
    answer: "Two graphs that can be transformed into each other by renaming vertices",
    description: "Graph isomorphism means two graphs are structurally identical, though their vertex labels may differ.",
    topic: "Graph Isomorphism"
  },
  {
    question: "Which of the following is \"not\" a property of an isomorphic graph?",
    options: [
      "Both graphs have the same number of vertices and edges",
      "Both graphs have the same number of connected components",
      "The vertex degrees are identical in both graphs",
      "The graphs must have the same layout"
    ],
    answer: "The graphs must have the same layout",
    description: "Isomorphic graphs may have different layouts or representations, but they must have the same structure.",
    topic: "Graph Isomorphism"
  },
  {
    question: "Which of the following properties is \"not\" necessarily preserved under graph isomorphism?",
    options: [
      "Number of vertices",
      "Degree of each vertex",
      "Graph layout",
      "Number of edges"
    ],
    answer: "Graph layout",
    description: "Graph layout does not need to be the same in isomorphic graphs, only their structure and properties must be.",
    topic: "Graph Isomorphism"
  },
  {
    question: "What does the \"connectivity\" of a graph refer to?",
    options: [
      "Whether every pair of vertices has an edge",
      "The number of edges in the graph",
      "The minimum number of edges needed to connect all vertices",
      "Whether the graph can be drawn in a plane"
    ],
    answer: "The minimum number of edges needed to connect all vertices",
    description: "Connectivity refers to how well-connected the vertices of a graph are; a graph is connected if there is a path between every pair of vertices.",
    topic: "Graph Connectivity"
  },
  {
    question: "In a connected graph, what happens if you remove an edge?",
    options: [
      "The graph becomes disconnected if the removed edge was part of the only path between two vertices",
      "The graph remains connected since the removed edge was not essential",
      "The number of vertices decreases",
      "The graph becomes a tree"
    ],
    answer: "The graph becomes disconnected if the removed edge was part of the only path between two vertices",
    description: "Removing a critical edge can disconnect a graph, making it no longer connected.",
    topic: "Graph Connectivity"
  },
  {
    question: "What is a \"cut\" in graph theory?",
    options: [
      "A partition of the graph's vertices into two disjoint sets",
      "A vertex with a degree of 1",
      "A cycle within the graph",
      "A graph with no edges"
    ],
    answer: "A partition of the graph's vertices into two disjoint sets",
    description: "A cut in a graph divides its vertices into two disjoint sets, and the edges that cross from one set to the other are the cut edges.",
    topic: "Graph Connectivity"
  },
  {
    question: "What does a \"bridge\" (or \"cut-edge\") represent in a connected graph?",
    options: [
      "A vertex that has the highest degree",
      "An edge that, if removed, increases the number of connected components of the graph",
      "A cycle in the graph",
      "A vertex that connects two disjoint components"
    ],
    answer: "An edge that, if removed, increases the number of connected components of the graph",
    description: "A bridge is an edge that, when removed, makes the graph disconnected by splitting it into two components.",
    topic: "Graph Connectivity"
  },
  {
    question: "Which of the following is a \"strongly connected\" directed graph?",
    options: [
      "A graph where there is a directed path between every pair of vertices",
      "A graph where no directed paths exist between any two vertices",
      "A graph where every vertex has at least one outgoing edge",
      "A graph where all vertices have the same degree"
    ],
    answer: "A graph where there is a directed path between every pair of vertices",
    description: "A directed graph is strongly connected if there is a directed path between every pair of vertices in the graph.",
    topic: "Graph Connectivity"
  },
  {
    question: "Which of the following is true about \"connected components\" of a graph?",
    options: [
      "A connected component is a subgraph where there is a path between every pair of vertices",
      "A connected component is always a tree",
      "A connected component has no cycles",
      "The number of connected components in a graph is always equal to the number of edges"
    ],
    answer: "A connected component is a subgraph where there is a path between every pair of vertices",
    description: "A connected component is a maximal set of vertices in which there is a path between any two vertices.",
    topic: "Graph Connectivity"
  },
  {
    question: "Which algorithm is typically used to find connected components in an undirected graph?",
    options: [
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
      "Prim's Algorithm"
    ],
    answer: "Breadth-First Search (BFS)",
    description: "BFS is commonly used to explore all vertices in a connected component of an undirected graph.",
    topic: "Graph Traversal"
  },
  {
    question: "In a \"complete bipartite graph\" \( K_{m,n} \), how many edges are there?",
    options: [
      "m + n",
      "m * n",
      "m^2 + n^2",
      "m - n"
    ],
    answer: "m * n",
    description: "In a complete bipartite graph \( K_{m,n} \), every vertex in set \( m \) is connected to every vertex in set \( n \), leading to \( m \times n \) edges.",
    topic: "Special Graphs"
  },
  {
    question: "Which of the following is **not** a valid condition for a graph to be \"planar\"?",
    options: [
      "The graph can be drawn without any edges crossing",
      "The graph contains exactly one cycle",
      "The graph has no subgraph homeomorphic to \( K_5 \) or \( K_{3,3} \)",
      "The graph can be embedded in a two-dimensional plane"
    ],
    answer: "The graph contains exactly one cycle",
    description: "A planar graph can contain cycles, but the key condition is that it must not have subgraphs homeomorphic to \( K_5 \) or \( K_{3,3} \).",
    topic: "Graph Types"
  },
  {
    question: "What is the \"chromatic number\" of a graph?",
    options: [
      "The minimum number of colors required to color the graph such that no two adjacent vertices share the same color",
      "The total number of edges in the graph",
      "The number of vertices in the graph",
      "The maximum degree of the graph"
    ],
    answer: "The minimum number of colors required to color the graph such that no two adjacent vertices share the same color",
    description: "The chromatic number of a graph is the smallest number of colors needed to color the vertices such that adjacent vertices have different colors.",
    topic: "Graph Coloring"
  },
  {
    question: "Which of the following is \"not\" a necessary condition for a graph to be **Eulerian**?",
    options: [
      "The graph must be connected",
      "All vertices must have an even degree",
      "The graph must be a tree",
      "The graph must contain exactly one cycle"
    ],
    answer: "The graph must be a tree",
    description: "An Eulerian graph must be connected, and all its vertices must have an even degree; it does not need to be a tree.",
    topic: "Special Graphs"
  },
  {
    question: "What is an Eulerian path?",
    options: [
      "A path that visits every edge exactly once",
      "A path that visits every vertex exactly once",
      "A path that forms a cycle",
      "A path that starts and ends at the same vertex"
    ],
    answer: "A path that visits every edge exactly once",
    description: "An Eulerian path traverses each edge of a graph exactly once.",
    topic: "Graph Theory"
  },
 
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const descriptionElement = document.getElementById("description");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");
const questionIndexElement = document.getElementById("question-index");
const topicElement = document.getElementById("topic");

function loadQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionIndexElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  topicElement.textContent = `Topic: ${currentQuestion.topic}`;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(button, currentQuestion));
    optionsContainer.appendChild(button);
  });
  startTimer();
  updateProgressBar();
  //shuffleQuestions();
}

function resetState() {
  nextButton.classList.add("hidden");
  descriptionElement.textContent = "";
  optionsContainer.innerHTML = "";
}

function selectAnswer(selectedButton, question) {
  const isCorrect = selectedButton.textContent === question.answer;

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(optionsContainer.children).forEach(button => {
    button.disabled = true;
    if (button.textContent === question.answer) {
      button.classList.add("correct");
    }
  });

  descriptionElement.textContent = question.description;
  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalScreen();
  }
});

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  questionIndexElement.textContent = `Question 1 of ${questions.length}`;
  restartButton.classList.add("hidden");
  loadQuestion();
});

function showFinalScreen() {
  questionElement.textContent = `Quiz Complete! Your score is ${score} out of ${questions.length}.`;
  optionsContainer.innerHTML = "";
  nextButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
}

let timer;
let timeLeft = 15; // Time per question

function startTimer() {
  clearInterval(timer); // Clear any previous timer
  timeLeft = 15; // Reset time to 15 seconds
  const timerElement = document.getElementById("timer");

  // Update the timer UI immediately
  timerElement.textContent = `Time left: ${timeLeft}s`;

  // Start the countdown
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft}s`;

    // If time runs out
    if (timeLeft === 0) {
      clearInterval(timer); // Stop the timer

      // Disable all options
      Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === questions[currentQuestionIndex].answer) {
          button.classList.add("correct"); // Highlight the correct answer
        }
      });

      // Display a message and show the next button
      descriptionElement.textContent = "Time's up! The correct answer was highlighted.";
      nextButton.classList.remove("hidden");
    }
  }, 1000); // Run every 1 second
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progress = (score / questions.length) * 100; // Progress based on correct answers
  progressBar.style.width = `${progress}%`;
}

function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

// Call shuffleQuestions() before loadQuestion

loadQuestion();
