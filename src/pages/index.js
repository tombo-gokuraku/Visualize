/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Section from "../components/Section"
import Button from "../components/Button"
import H1 from "../components/H1"
import H2 from "../components/H2"
import H3 from "../components/H3"
import H4 from "../components/H4"
import H5 from "../components/H5"
import H6 from "../components/H6"
import P from "../components/P"
import Card from "../components/Card"
import Image from "../components/Image"
import SocialLinks from "../components/SocialLinks"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div tw="bg-black">
      <Layout>
        <SEO title="Home" />

        {/* Avatar component */}
        <div
          css={[
            tw`p-2 mx-auto rounded-full`,
            css`
              width: 10rem;
              background-color: rgba(255, 255, 255, 0.075);
              border: solid 1px rgba(255, 255, 255, 0.25);
            `,
          ]}
        >
          <Image
            fluid={data.file.childImageSharp.fluid}
            wrapperStyle={[tw`rounded-full`]}
            alt="avatar"
          />
        </div>
        <SocialLinks />
      </Layout>
    </div>
  )
}

export default IndexPage
