from fastapi import FastAPI, HTTPException, Response, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from pymongo import MongoClient
from passlib.context import CryptContext
import random
import json
import os

app = FastAPI()

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (use specific origins for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Serve static files (HTML, CSS, JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def serve_homepage():
    return FileResponse("static/mainpage.html")

# MongoDB setup
MONGODB_URL = "mongodb+srv://user1:test1234!@cluster0.smhr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGODB_URL)
db = client.login
users_collection = db.login

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserLogin(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(user_data: UserLogin):
    user = users_collection.find_one({"username": user_data.username})
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    
    if not pwd_context.verify(user_data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    
    return {"message": "Login successful"}

@app.post("/register")
async def register(user_data: UserLogin):
    # Check if username already exists
    if users_collection.find_one({"username": user_data.username}):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists"
        )
    
    hashed_password = pwd_context.hash(user_data.password)
    
    new_user = {
        "username": user_data.username,
        "password": hashed_password
    }
    
    users_collection.insert_one(new_user)
    return {"message": "User registered successfully"}

# Load Euler problems from the JSON file
euler_problem_file_path = os.path.join(os.path.dirname(__file__), 'static','euler_path', 'backend', 'euler_problem.json')
with open(euler_problem_file_path, 'r') as file:
    euler_problems = json.load(file)["eulerPathProblems"]

class EulerPathRequest(BaseModel):
    level: str

class EulerPathSolution(BaseModel):
    level: str
    description: str
    solution: list

# Endpoint to get a random problem based on difficulty level
@app.post("/get_problem")
def get_problem(request: EulerPathRequest):
    level = request.level.lower()
    if level not in euler_problems:
        raise HTTPException(status_code=404, detail="Level not found")
    problem = random.choice(euler_problems[level])
    return problem

# Endpoint to check the user's solution
@app.post("/check_solution")
def check_solution(solution: EulerPathSolution):
    level = solution.level.lower()
    if level not in euler_problems:
        raise HTTPException(status_code=404, detail="Level not found")
    
    for problem in euler_problems[level]:
        if problem["description"] == solution.description:
            if "solution" not in problem["graph"]:
                raise HTTPException(status_code=500, detail="Solution key not found in problem")
            if problem["graph"]["solution"] == solution.solution:
                return {"correct": True}
            else:
                return {"correct": False}
    
    raise HTTPException(status_code=404, detail="Problem description not found")



@app.get("/navigate")
async def serve_navigation_page():
    return FileResponse("static/navigate.html")

@app.get("/isomorphism")
async def serve_isomorphism_page():
    return FileResponse("static/isomorphism.html")

@app.get("/euler")
async def serve_isomorphism_page():
    return FileResponse("static/euler_path/frontend/index.html")

