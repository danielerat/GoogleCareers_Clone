const { reactive, computed, toRefs } = require("vue");
const person = reactive({
  firstName: "Ilunga",
  lastName: "Gisa Daniel",
});

const { firstName, lastName } = toRefs(person);
console.log(firstName.value + " =>" + lastName.value);

const title = computed(() => `${firstName.value} ${lastName.value}  The great`);
// When referencing to out created variables, we must also use the .value cause they are not objects
console.log(title.value);
person.firstName = "Danielerat";
console.log(title.value);
