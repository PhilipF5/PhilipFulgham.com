FROM node
RUN mkdir -p /src/assets/creds
RUN mkdir -p /src/assets/jobs
RUN mkdir -p /src/assets/portfolio
COPY src/assets/*.json src/assets/portrait.png /src/assets/
COPY src/assets/creds /src/assets/creds/
COPY src/assets/jobs /src/assets/jobs/
COPY src/assets/portfolio /src/assets/portfolio/
COPY package.json package-lock.json ./
RUN npm install
RUN apt-get update && apt-get install -y python-dev
RUN curl -O https://bootstrap.pypa.io/get-pip.py
RUN python get-pip.py
RUN pip install awscli
USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli
