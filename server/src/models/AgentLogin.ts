import Agent from './Agent'

class AgentLogin {
    private agent: Agent;
    private token: string;

    constructor($agent: Agent, $token: string) {
        this.agent = $agent;
        this.token = $token;
    }
}

export default AgentLogin
