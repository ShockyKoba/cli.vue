Vue.component('primary-component', {
    name: "primary",
    data: function () {
            return {
                names: ["Lucia", "Anna", "Melani", "Paola", "Alisson", "Samanta"]
            }
    },
    template: `
        <div id="primary-component" :class="this.$parent.$data.component_class">
            <h2 class="mb-4"><u>Cars</u></h2>
            <ul class="list-group">
                <li v-for="name in names" class="list-group-item">
                    {{name}}
                </li>
            </ul>
        </div>
    `
}); 
