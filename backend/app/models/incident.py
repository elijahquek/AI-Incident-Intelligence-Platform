# creating incidents table model
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database import Base

class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    severity = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)