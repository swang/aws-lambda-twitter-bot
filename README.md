aws-lambda-twitter-bot
=========================================
just a skeletal structure for creating twitter bots via aws lambda

### install
current version of aws uses node 6.10.x

you must have the aws cli setup before you execute these commands.

fill in the name and description of your twitter bot

first run `npm run build`, then `npm run create` which will upload the zip file
to aws. in the future you can just use `npm run deploy` which will run the
build and then update the function with new zip

next run `npm run add-perm` to allow the lambda permission to run cloudwatch
events. `npm run set-cron` then `npm run set-target`

there is a missing piece that's uncompleted. you need to add a trigger for
cloudwatch on the lambda function. not sure if theres a command to do it yet
so may have to manually add

### license
ISC

