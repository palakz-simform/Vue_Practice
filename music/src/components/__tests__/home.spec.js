import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Home from '../../views/Home.vue';
import SongItem from "../../components/SongItem.vue"

describe('Home.vue', () => {
    //description for test
    test('renders list of songs', () => {
        const songs = [
            {}, {}, {}
        ]
        const component = shallowMount(Home, {
            data() {
                return {
                    songs,
                }
            },
            global: {
                mocks: {
                    $t: (message) => message,
                }
            }

        });

        const items = component.findAllComponents(SongItem);
        expect(items).toHaveLength(songs.length)
    })
})