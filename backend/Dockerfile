ARG PYTHON_VERSION=3.13.6
FROM python:${PYTHON_VERSION}-slim AS base

WORKDIR /code

## copy separatedly to cache this step of image creation    
COPY ./requirements.txt /code/requirements.txt

## caching this step and the previous one means we don't have 
## download all the requirements every time
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY . /code/app

CMD [ "fastapi", "run", "app/main.py", "--port", "8000" ]
