class HelloWorldCard extends HTMLElement {

    config;
    content;

    set hass(hass) {
        if (!this.content) {
            this.innerHTML = `
                <ha-card header="Hello!">
                    <div class="card-content"></div>
                </ha-card>
            `;
            this.content = this.querySelector('div');
        }
        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : 'unavailable';

        this.content.innerHTML = `
            The state of ${entityId} is ${stateStr}.
            <br><br>
            <img src="http://via.placeholder.com/350x150">
        `;
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error('You need to define an entity');
        }
        this.config = config;
    }

}

customElements.define('hello-world-card', HelloWorldCard);
