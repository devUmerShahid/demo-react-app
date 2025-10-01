import config_img from './assets/config.png';
import jsx_ui from './assets/jsx-ui.png';
import state_mgmt from './assets/state-mgmt.png';

export const Custom_Message=[
    {
        image: state_mgmt,
        title: 'Learn',
        description: 'The first rule of Programming is to understand the core concepts step by step instead of rushing.'
    },

    {
        image: config_img,
        title: 'Practice',
        description: 'Along with learning the concepts write code daily, even small snippets, to build muscle memory.'
    },

    {
        image: jsx_ui,
        title: 'Build',
        description: 'Now start apply your knowledge by creating small real-world projects to gain real-world experience.'
    },

    {
        image: jsx_ui,
        title: 'Build',
        description: 'Now start apply your knowledge by creating small real-world projects to gain real-world experience.'
    },
]

export const Core_Cocepts=[
    {
        image: state_mgmt,
        title: 'Learn',
        description: 'The first rule of Programming is to understand the core concepts step by step instead of rushing.'
    },

    {
        image: config_img,
        title: 'Practice',
        description: 'Along with learning the concepts write code daily, even small snippets, to build muscle memory.'
    },

    {
        image: jsx_ui,
        title: 'Build',
        description: 'Now start apply your knowledge by creating small real-world projects to gain real-world experience.'
    },
]


//TabButtons Data

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};