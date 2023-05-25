import { describe, expect, test } from "vitest";
import About from '../../views/About.vue';
import { mount } from '@vue/test-utils'
describe('About.vue', () => {
    test('renders inner', () => {
        const wrapper = mount(About, {
            shallow: true,
        })
        //WRAPPER REPRESENT COMPONENT
        // assersion
        expect(wrapper.text()).toContain('about');  //The asertion we are making is we expect the text to contain about.
    })
});