BASE_URL="https://deploy-preview-${TRAVIS_PULL_REQUEST}--gatsby-starter-morning-dew.netlify.com"
yarn lh -- $BASE_URL --pwa=100 --a11y=100 --seo=82 --bp=93
yarn lh -- $BASE_URL/how-to-install --pwa=100 --a11y=100 --seo=82 --bp=79