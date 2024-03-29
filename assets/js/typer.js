var typed = new Typed('#liveCode', {
    strings: [
        '<code>docker-compose build</code>',
        '<code>docker images ls</code>',
        '<code>docker tag datalink3_server gcr.io/binox/datalink3_server && docker push gcr.io/binox/datalink3_server</code>',
        '<code>docker compose up</code>',
        '<code>kubectl get pv</code>',
        '<code>kubectl apply -f db-service.yaml</code>',
        '<code>kubectl describe pods</code>',
        '<code>kubectl create -f operator/ --namespace mongodb</code>',
        '<code>kubectl apply -f secret.yaml --namespace mongodb</code>',
        '<code>kubectl delete pod --namespace=mongodb my-replica-set-0</code>',
        '<code>docker-compose down</code>',
        '<code>docker system prune -a</code>',
        '<code>npm install -g @google-cloud/functions-framework</code>',
        '<code>npm install -g @google-cloud/functions-emulator</code>',
        '<code>npm view @datalinksoftware/binox-auth</code>',
        '<code>npm install @google-cloud/bigquery</code>',
        '<code>npm install @types/mongoose</code>',
        '<code>npm install -D typescript</code>',
        '<code>npm install express</code>',
        '<code>npm run build && firebase emulators:start --only functions</code>',
        '<code>firebase deploy --only functions:syncService'
    ],
    typeSpeed: 40,
    loop: true,
    backDelay: 1000,
    smartBackspace: true,
    showCursor: false
});