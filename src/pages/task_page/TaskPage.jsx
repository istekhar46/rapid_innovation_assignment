import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DocumentationWrapper = styled.div`
  padding: 12rem;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fffdfa")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 12rem 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.color};
  padding-bottom: 0.5rem;
  font-size: 2.4rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1.8rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
  font-size: 1.5rem;
`;

const Code = styled.pre`
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const TaskPage = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <DocumentationWrapper theme={theme}>
      <Section>
        <SectionTitle>1. React JS Setup and Routing</SectionTitle>
        <Paragraph>
          Objective: Set up a basic React application with routing.
        </Paragraph>
        <Paragraph>Tasks:</Paragraph>
        <List>
          <li>Initialize a new React application using Create React App.</li>
          <li>Set up React Router and create navigational components.</li>
          <li>
            Implement routing for three pages: Home, Contact Us, and TaskPage.
          </li>
        </List>
        <Code>
          {`# Step 1: Initialize React App
npx create-react-app assignment-app
cd assignment-app

# Step 2: Install necessary dependencies
npm install react-router-dom formik yup redux redux-toolkit react-redux styled-components`}
        </Code>
      </Section>

      <Section>
        <SectionTitle>2. Contact Us Page with Form</SectionTitle>
        <Paragraph>
          Objective: Create a Contact Us page that includes a comprehensive form
          using Formik and Yup for validations.
        </Paragraph>
        <Paragraph>Tasks:</Paragraph>
        <List>
          <li>
            Design a form that collects name, email, address, date of birth,
            bio, and allows profile and banner image uploads.
          </li>
          <li>Implement basic validations for each field using Yup.</li>
          <li>
            On form submission, display the entered data in a popup window.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Responsive Landing Page Design</SectionTitle>
        <Paragraph>
          Objective: Develop a responsive landing page using CSS Grid.
        </Paragraph>
        <Paragraph>Tasks:</Paragraph>
        <List>
          <li>
            Create the provided design for the landing page using CSS Grid.
            Ensure that no third-party grid libraries are used.
          </li>
          <li>
            The page should be responsive and adapt to different screen sizes
            using CSS media queries.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>
          4. Redux and State Management Task: Theme Toggle Feature
        </SectionTitle>
        <Paragraph>
          Objective: Implement a theme toggling feature using Redux Toolkit that
          allows the user to switch between a light and dark theme across the
          application.
        </Paragraph>
        <Paragraph>Detailed Tasks:</Paragraph>
        <List>
          <li>
            Setup Redux Toolkit: Initialize the Redux store using Redux Toolkit.
          </li>
          <li>
            Configure the Provider in the main entry file of your React
            application to wrap around the entire app component tree.
          </li>
          <li>Create a slice in Redux Toolkit named themeSlice.</li>
          <li>
            Define the initial state with a property theme which can either be
            'light' or 'dark'.
          </li>
          <li>Add actions to toggle the theme between light and dark.</li>
          <li>
            Create a ThemeToggle component that displays a button to toggle the
            theme.
          </li>
          <li>
            Use the theme state from the Redux store to conditionally apply
            styles to components.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Styling with Styled Components</SectionTitle>
        <Paragraph>
          Objective: Style the landing page using Styled Components.
        </Paragraph>
        <Paragraph>Tasks:</Paragraph>
        <List>
          <li>Apply CSS styles to the landing page using Styled Components.</li>
          <li>Ensure the styles are modular and reusable across components.</li>
        </List>
      </Section>
    </DocumentationWrapper>
  );
};

export default TaskPage;
