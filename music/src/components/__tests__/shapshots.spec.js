import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import SongItem from '../../components/SongItem.vue'


describe('Sapshots SongItem.vue', () => {
    test('renders correctly', () => {
        const song = {
            docID: 'abc',
            modified_name: 'test',
            display_name: 'test',
            comment_count: 5,
        };
        const wrapper = shallowMount(SongItem, {
            props: {
                song
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            }
        })
        expect(wrapper.element).toMatchSnapshot();
    })
})