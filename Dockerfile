FROM node as builder
ENV GENERATE_SOURCEMAP false
WORKDIR /tmp
COPY . .
RUN yarn global add psc-package
RUN yarn install
RUN psc-package install
RUN yarn run build

FROM nginx:alpine
COPY --from=builder /tmp/dist /usr/share/nginx/html
