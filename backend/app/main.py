from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yaml
import os

# Load OpenAPI spec from external YAML file


def load_openapi_spec():
    yaml_path = os.path.join(os.path.dirname(__file__), "openapi.yaml")
    with open(yaml_path, "r") as file:
        return yaml.safe_load(file)


app = FastAPI()

# Set the OpenAPI schema from external file
app.openapi_schema = load_openapi_spec()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
def get_message():
    """GET endpoint that returns 'Hello API'"""
    return {"message": "Hello API"}


@app.get("/health")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "Camphand API"}
