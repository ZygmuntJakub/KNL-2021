import * as React from "react";
import { graphql } from "gatsby";

export default function IndexPage({ data }) {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    return <>{frontmatter.title}</>;
}

export const pageQuery = graphql`
    query MyQuery {
        markdownRemark(html: {}, frontmatter: { title: { eq: "Kuba" } }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`;
