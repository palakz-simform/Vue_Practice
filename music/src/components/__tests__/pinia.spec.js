import { setActivePinia, createPinia } from "pinia"
import { beforeEach, describe, expect, test, vi } from "vitest"
import useUserStore from "../../stores/user"
vi.mock("../../includes/firebase.js", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve(),
    }
}))
describe("stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test("authenticate users", async () => {
        const store = useUserStore();
        expect(store.userLoggedIn).not.toBe(true)
        await store.authenticate({});
        expect(store.userLoggedIn).toBe(true)
    })
})