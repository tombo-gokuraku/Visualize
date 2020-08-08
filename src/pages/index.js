/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw from "twin.macro"
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
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Button href={"#!"}>hoge</Button>
      <Button reverse href={"#!"}>
        reverse
      </Button>
      <SEO title="Home" />
      <Section>
        <H1>h1</H1>
        <H2>h2</H2>
        <H3>h3</H3>
        <H4>h4</H4>
        <H5>h5</H5>
        <H6>h6</H6>
        <P>Install the Gatsby CLI and create a project with this starter</P>
        <Pre>
          <code>
            gatsby new emotion_tailwind
            https://github.com/tombo-gokuraku/gatsby-starter-tailwind-lp
          </code>
          <br />
          <code>cd emotion_tailwind</code>
          <br />
          <code>gatsby develop</code>
        </Pre>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
      </Section>
      <Section reverse>
        <H1>h1</H1>
        <H2>h2</H2>
        <H3>h3</H3>
        <H4>h4</H4>
        <H5>h5</H5>
        <H6>h6</H6>
        <P>Install the Gatsby CLI and create a project with this starter</P>
        <Pre>
          <code>
            gatsby new emotion_tailwind
            https://github.com/tombo-gokuraku/gatsby-starter-emotion-tailwind
          </code>
          <br />
          <code>cd emotion_tailwind</code>
          <br />
          <code>gatsby develop</code>
        </Pre>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </P>
        <Card>
          <div tw="rounded-lg w-full">
            <Image
              fluid={data.file.childImageSharp.fluid}
              wrapperStyle={[tw`rounded-t-lg`]}
              alt="hoge"
            />
          </div>
          <div tw="p-6">
            <P>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </P>
            <Button reverse href={"#!"}>
              Learn More
            </Button>
          </div>
        </Card>
        <Card />
      </Section>
      <SocialLinks />
    </Layout>
  )
}

const Pre = tw.pre`
  text-sm
  bg-gray-300
  overflow-auto
  mb-2
`

export default IndexPage
