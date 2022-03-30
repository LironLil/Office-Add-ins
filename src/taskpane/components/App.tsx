import * as React from "react";
import { DefaultButton } from "@fluentui/react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";

import { ButtonPrimaryExample } from "./Button";
import { TextFieldBasicExample } from "./CreateFields";

/* global Word, require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  listItems: HeroListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        /*   {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        }, */
      ],
    });
  }

  click = async () => {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);

      // change the paragraph color to blue.
      paragraph.font.color = "blue";

      await context.sync();
    });
  };

  render() {
    return (
      <div className="ms-welcome">
        <Header logo="assets/icon-128.png" title={this.props.title} message="" />
        <HeroList message="" items={this.state.listItems}>
          <TextFieldBasicExample />
          {/* <ButtonPrimaryExample /> */}
        </HeroList>
      </div>
    );
  }
}
