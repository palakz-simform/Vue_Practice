import { ref, computed, isRef, isReactive, reactive } from 'vue'
export const useNumber = () => {

    let num = ref(0);
    const accounts = reactive({
        checking: 23432,
        savings: 234
    })
    console.log(isRef(num))
    console.log(isReactive(accounts))
    // console.log(num)
    function increment() {
        num.value++;
    }

    const double = computed(() => {
        return num.value * 2;
    });
    return { num, increment, double }
}

// Insted of mixins
// These are composition functions which are highly reusable.
// It throws an error if same names are used in two hooks.
// So sloution for this would be we can asign an alias name for one of the conflicting names.
