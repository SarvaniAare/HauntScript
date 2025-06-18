
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StoryRequest(BaseModel):
    character: str
    situation: str
    lines: int

@app.post("/generate")
async def generate_story(req: StoryRequest):
    samples = [
        f"{req.character} stepped into the abandoned mansion. The floor creaked... and then a whisper echoed: '{req.situation}'",
        f"{req.character} found a dusty mirror. Suddenly, in the reflection, someone whispered, '{req.situation}'",
        f"In the darkness, {req.character} felt something cold grab their arm. '{req.situation}', it moaned."
    ]
    story = "\n".join(random.choices(samples, k=int(req.lines)))
    return {"story": story}
