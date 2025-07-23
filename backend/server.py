from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()  # FastAPI ko server

# Allow the browser to call us from any origin (development‑friendly CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Jun origin aaye ni allow garne
    allow_methods=["*"], # Jun method aaye ni allow garne
    allow_headers=["*"], # Jun header aaye ni allow garne
)

class NameIn(BaseModel):
    name: str

@app.get("/api/ping")
async def ping():
    return {"message": "pong"}

@app.post("/api/greet")
async def greet(payload: NameIn):
    return {"message": f"Hello, {payload.name}!"}

@app.post("/api/hate")
async def greet(payload: NameIn):
    return {"message": f"I hate you, {payload.name}!"}
