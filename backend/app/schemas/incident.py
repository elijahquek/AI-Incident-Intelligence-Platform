# This separates API data from DB data (very important).
from pydantic import BaseModel

class IncidentCreate(BaseModel):
    title: str
    description: str
    severity: str


class IncidentResponse(IncidentCreate):
    id: int

    class Config:
        from_attributes = True