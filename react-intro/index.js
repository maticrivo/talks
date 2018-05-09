import React from 'react';
// For a complete API docs see https://github.com/FormidableLabs/spectacle#tag-api
import {
  Slide, Appear,
  Layout, Fill, Fit,
  Typeface, Heading, Text, Link, S, Markdown,
  List, ListItem,
  Table,  TableItem, TableHeaderItem, TableRow,
  BlockQuote, Quote, Cite,
  Code, CodePane,
  Image
} from 'spectacle';
import render, { Presentation } from 'melodrama';

// --- THEME ---
// Import and create the theme you want to use.
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme({
	primary: '#fafafa',
	secondary: '#61dafb',
	tertiary: '#6e7580',
	quarternary: "#a37acc",
}, {
	primary: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
});

// --- SYNTAX HIGHLIGHTING ---
import 'prismjs/components/prism-core';
// import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

// --- IMAGES ---
// Import/require your images and add them to `images`
// for easy access and preloading.
const images = {
	reactLogo: require('./assets/react-logo.png')
};

// --- PRESENTATION ---
const Root = () => (
  <Presentation theme={theme} progress="pacman">
    <Slide
    	notes={(
    		<ul>
    			<li>introduce myself</li>
    			<li>ask about background</li>
    			<li>ask if they know what react is</li>
    		</ul>
  		)}
  	>
      <Image src={images.reactLogo} width={200} />
      <Heading textColor="secondary" size={1}>React</Heading>
      <br />
      <br />
      <br />
      <br />
    	<S type="italic" textColor="tertiary"><p>by Matias Crivolotti</p></S>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading textColor="secondary" size={2}>Introduction to React</Heading>
    	<List>
    	  <Appear>
    	  	<ListItem textColor="tertiary">What is React</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">JSX</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Components</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Component State</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Component Props</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Component Lifecycle</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">And more...</ListItem>
    	  </Appear>
    	</List>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">What is React</Heading>
    	<List>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Library, not a Framework</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Declarative</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Components-Based</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">One-way data flow</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Virual DOM</ListItem>
    	  </Appear>
    	</List>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">JSX</Heading>
      <Appear>
      	<p>
		      <Text textColor="tertiary">Is a syntax extension to JavaScript.</Text>
		      <Text textColor="tertiary">Looks like HTML/XML, full JavaScript power.</Text>
		    </p>
	    </Appear>
	    <Appear>
	    	<CodePane
	    		lang="jsx"
	    		theme="light"
	    		source={`...
	return (
	  <div className="shopping-list">
	    <h1>Shopping List</h1>
	    <ul>
	    	<li>Milk</li>
	    	<li>Sugar</li>
	    	<li>Honey</li>
	    </ul>
	  </div>
	);
...`}
	    	/>
	    </Appear>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">Components</Heading>
      <Appear>
      	<p>
		      <Text textColor="tertiary">Components let you split UI into independent reusable parts.</Text>
		    </p>
	    </Appear>
    	<List>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Stateful</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Stateless</ListItem>
    	  </Appear>
    	</List>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={4} textColor="tertiary">Stateful Component</Heading>
    	<p>
      	<S type="italic" textColor="tertiary">Also know as a "Smart" Component.</S>
	    </p>
    	<List>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Can maintain internal data and modify it</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Provides data to child components</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Has living knowledge of current state</ListItem>
    	  </Appear>
    	</List>
	    <Appear>
	    	<CodePane
	    		lang="jsx"
	    		theme="light"
	    		source={`class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <ul>
        {this.state.list.map((item) => (<ShoppingListItem onClick={this.removeItem} item={item} />))}
      </ul>
    );
  }
}`}
	    	/>
	    </Appear>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={4} textColor="tertiary">Stateless Component</Heading>
    	<p>
      	<S type="italic" textColor="tertiary">Also know as a "Sumb" Component.</S>
	    </p>
    	<List>
    	  <Appear>
    	  	<ListItem textColor="tertiary">No data mutation</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Easy to understand</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">No logic, only view representation</ListItem>
    	  </Appear>
    	  <Appear>
    	  	<ListItem textColor="tertiary">Improve performance</ListItem>
    	  </Appear>
    	</List>
	    <Appear>
	    	<CodePane
	    		lang="jsx"
	    		theme="light"
	    		source={`const ShoppingListItem = (props) => {
  return (
    <li>
      {props.item.name}
      <button onClick={() => props.removeItem(props.item.id)} />
    </li>
  );
}`}
	    	/>
	    </Appear>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">Component State</Heading>
      <Appear>
      	<p>
		      <Text textColor="tertiary">State allows us to work with changeable data</Text>
		    </p>
	    </Appear>
	    <List>
	      <Appear>
	      	<ListItem textColor="tertiary">State updates are merged</ListItem>
	      </Appear>
	      <Appear>
	      	<ListItem textColor="tertiary">Set initial state in constructor</ListItem>
	      </Appear>
	      <Appear>
	      	<ListItem textColor="tertiary">Do not update directly, use <Code>setState</Code></ListItem>
	      </Appear>
	    </List>
	    <Appear>
	    	<CodePane
	    		lang="jsx"
	    		theme="light"
	    		source={`class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  removeItem = event => {
  	const newList = ...;
  	this.setState({ list: newList });
  }

  render() {
    return (
      <ul>
        {this.state.list.map((item) => (<ShoppingListItem onClick={this.removeItem} item={item} />))}
      </ul>
    );
  }
}`}
	    	/>
	    </Appear>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">Component Props</Heading>
      <Appear>
      	<p>
		      <Text textColor="tertiary">Props are used to pass data and events to components</Text>
		    </p>
	    </Appear>
	    <List>
	      <Appear>
	      	<ListItem textColor="tertiary">Props are read-only</ListItem>
	      </Appear>
	      <Appear>
	      	<ListItem textColor="tertiary">Pass arguments to event handlers</ListItem>
	      </Appear>
	    </List>
	    <Appear>
	    	<CodePane
	    		lang="jsx"
	    		theme="light"
	    		source={`const ShoppingListItem = (props) => {
  return (
    <li>
      {props.item.name}
      <button onClick={() => props.removeItem(props.item.id)} />
    </li>
  );
}`}
	    	/>
	    </Appear>
    </Slide>
    <Slide transition={["slide"]}>
      <Heading size={3} textColor="secondary">And more...</Heading>
      <br />
      <br />
      <Appear>
	      <Heading size={6} textColor="tertiary">Resources</Heading>
      </Appear>
      <Appear>
		    <List>
	      	<ListItem textColor="tertiary"><Link href="https://reactjs.org/tutorial/tutorial.html" target="_blank">Official React Tutorial</Link></ListItem>
	      	<ListItem textColor="tertiary"><Link href="https://egghead.io/courses/the-beginner-s-guide-to-reactjs" target="_blank">Beginner guide to ReactJS - Kent C. Dodds</Link></ListItem>
	      	<ListItem textColor="tertiary"><Link href="https://codesandbox.io/" target="_blank">Online playground for react</Link></ListItem>
	      	<ListItem textColor="tertiary"><Link href="" target="_blank">This presentation - source code</Link></ListItem>
	      	<ListItem textColor="tertiary"><Link href="https://codesandbox.io/s/3v37ozjqw5" target="_blank">Shopping list demo</Link></ListItem>
		    </List>
      </Appear>
    </Slide>
  </Presentation>
);

render(Root, { images });
