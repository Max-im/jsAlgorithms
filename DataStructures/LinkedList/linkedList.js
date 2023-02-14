class LinkedList {
    constructor() {
        this.last = null;
    }

    add(data) {
        const prev = this.last;
        const element = { data, prev };
        this.last = element;
        return element;
    }

    show() {
        let current = this.last;

        while (current) {
            current.display();
            current = current.prev;
        }
    }

    [Symbol.iterator] = () => ({
        element: this.last,
        next: () => {
            const current = this.last;
            if (!current) return { done: true, value: null };
            this.last = current.prev;
            return { done: false, value: current.data }
        }
    });
}

module.exports = LinkedList;
