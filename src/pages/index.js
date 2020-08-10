/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Header from "../components/Header"
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
import BackgroundImage from "../components/BackgroundImage"
import MasonryContainer from "../components/MasonryContainer"
import ScreenContainer from "../components/ScreenContainer"
import OuterLink from "../components/OuterLink"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allFile(
        filter: { relativePath: { glob: "0*.jpg" } }
        sort: { order: ASC, fields: relativePath }
      ) {
        images: nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
            id
          }
        }
      }
    }
  `)
  return (
    <div tw="text-white text-opacity-75">
      <BackgroundImage
        fluid={data.bg.childImageSharp.fluid}
        parentStyle={{
          position: "relative",
        }}
      >
        <SEO title="Home" />
        <ScreenContainer>
          <Header>
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
                fluid={data.avatar.childImageSharp.fluid}
                wrapperStyle={[tw`rounded-full`]}
                alt="avatar"
              />
            </div>
            <H1>
              This is{" "}
              <strong tw="text-opacity-100 font-normal">Visualize</strong>, a
              responsive site template designed by{" "}
              <OuterLink
                href="https://templated.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEMPLATED
              </OuterLink>{" "}
              <br />
              and released for free under the Creative Commons License.
            </H1>
            <SocialLinks />
          </Header>
          <Layout>
            <MasonryContainer>
              {data.allFile.images.map(image => {
                return (
                  <Card key={image.id}>
                    <div tw="w-full rounded-t-lg">
                      <Image
                        fluid={image.childImageSharp.fluid}
                        wrapperStyle={[tw`rounded-t-lg`]}
                      />
                    </div>
                    <H2>Lorem ipsum dolor sit amet</H2>
                  </Card>
                )
              })}
            </MasonryContainer>
          </Layout>
        </ScreenContainer>
      </BackgroundImage>
    </div>
  )
}

export default IndexPage
