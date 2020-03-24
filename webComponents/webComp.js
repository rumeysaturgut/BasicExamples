class MyComponent extends HTMLElement{
    constructor()
    {
        super()
        this.name = "rumeysa"
        this.surname = "turgut"
    }

    connectedCallback() {
        this.innerHTML = "<b>"+ this.name +" "+ this.surname +"</b>";
      }
}
window.customElements.define("my-component",MyComponent);