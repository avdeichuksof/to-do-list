import dotenv from 'dotenv'
import { Command } from 'commander'

const program = new Command()

program
    .option('-d', 'Debug variable', false)
    .option('-p <port>', 'Server port', 8080)
    .option('--mode <mode>', 'Work mode', 'develop')
program.parse()

console.log('Mode options: ', program.opts().mode)

const environment = program.opts().mode

dotenv.config({
    path: environment === 'production' ? './.env' : './.env'
})

export default {
    port: process.env.PORT,
    secret: process.env.SECRET,
    mongo_url: process.env.MONGO_URL
}