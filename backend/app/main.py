from fastapi import FastAPI
from app.database import engine, Base
from app.routes import incident
from app.routes import incident, auth

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(incident.router)
app.include_router(auth.router)

@app.get("/health")
def health():
    return {"status": "ok"}

