import Tiger from "./Tiger.js";
import Wolf from "./Wolf.js";

const fighting = (Tiger, Wolf) => {
    if(Tiger.strength > Wolf.strength) {
        Tiger.growl();
        return;
    }

    if(Wolf.strength > Tiger.strength) {
        Wolf.howl();
        return
    }

    console.log('Tiger and wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);