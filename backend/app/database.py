# engine → connection to PostgreSQL
# SessionLocal → DB session per request
# Base → parent class for all models

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://postgres:password123@localhost:5432/incidents_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()