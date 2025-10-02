ARG PYTHON_VERSION=3.13.6
FROM python:${PYTHON_VERSION}-slim AS base

WORKDIR /code

## copy separatedly to cache this step of image creation    
COPY ./backend/requirements.txt /code/requirements.txt

## caching this step and the previous one means we don't have 
## download all the requirements every time
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./backend/app /code/app

EXPOSE 8000

# Use FastAPI run command for production (no hot reload, optimized)
CMD [ "fastapi", "run", "app/main.py", "--host", "0.0.0.0", "--port", "8000" ]
