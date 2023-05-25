import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import SongItem from '../../components/SongItem.vue'

describe('Router', () => {
    test('renderS router link', () => {
        const song = {
            docID: 'abc'
        }
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
        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'song', params: { id: song.docID } })
    });


})