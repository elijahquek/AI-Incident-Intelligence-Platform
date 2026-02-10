from fastapi import FastAPI
from app.database import engine, Base
from app.routes import incident

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(incident.router)

@app.get("/health")
def health():
    return {"status": "ok"}