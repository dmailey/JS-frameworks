import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
    @service('todo-data') todos;

    // @action decorator declares that the function is an "action", meaning it's a type of function that will be
    // invoked from an event that occurred in the template. @action also binds the this of the function to the class
    // instance.

    @action
    onKeyDown({ target, key }) {
        let text = target.value.trim();
        let hasValue = Boolean(text);

        if (key === 'Enter' && hasValue) {
            this.todos.add(text);

            target.value = '';
        }
    }
}
