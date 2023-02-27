import {Meta, moduleMetadata, Story} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {};
