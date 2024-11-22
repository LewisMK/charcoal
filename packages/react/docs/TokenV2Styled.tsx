/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* lint runs before build so json does not exist */

import React, { useState } from 'react'
import styled from 'styled-components'
// This does not work :(
// import tokens from '@charcoal-ui/theme/tokens/camel/css-variables.json'
import tokens from '../../theme/dist/tokens/camel/css-variables.json'
import { Button, Icon } from '@charcoal-ui/react'

const categories = ['Illustration', 'Comic', 'Novel', '3D', 'Shopping']
const artworks = Array.from({ length: 3 }, (_, id) => ({
  id,
  title: 'Title',
  thumbnail: `https://loremflickr.com/150/100/animals?random=${id}`,
  description: 'Description',
}))

export default function TokenV2Styled() {
  const [selected, setSelected] = useState(categories[0])
  return (
    <Container>
      <nav>
        <div aria-label="Categories" role="tablist">
          {categories.map((category) => (
            <Tab
              id={`category-${category}`}
              role="tab"
              aria-selected={category === selected}
              aria-controls={`panel-${category}`}
              key={category}
              onClick={() => {
                setSelected(category)
              }}
            >
              {category}
            </Tab>
          ))}
        </div>
      </nav>
      <H2>Works from users you follow</H2>
      <UserCard
        id={`panel-${selected}`}
        role="tabpanel"
        aria-labelledby={`category-${selected}`}
      >
        <UserInfo>
          <User aria-label="UserIcon">
            <Icon name="24/FaceEdit" />
          </User>
          <UserName>UserName</UserName>
          <Button variant="Primary" size="S">
            Follow
          </Button>
        </UserInfo>
        <ShowAll>Show all</ShowAll>
        <ArtworkList key={selected}>
          {artworks.map((a) => (
            <li key={a.id}>
              <Artwork>
                <ArtworkThumbnail src={a.thumbnail} alt={a.title} />
                <ArtworkTitle>{a.title}</ArtworkTitle>
                <ArtworkDescription>{a.description}</ArtworkDescription>
              </Artwork>
            </li>
          ))}
        </ArtworkList>
      </UserCard>
    </Container>
  )
}

const Container = styled.section`
  transition: 0.3s color ease-in-out;
  display: grid;
  gap: 24px;
  max-width: fit-content;
`

const H2 = styled.h2`
  margin: 0;
  color: ${tokens.color.text.secondary.default};
  font-size: calc(${tokens.text.fontSize.heading.xs} * 1px);
  line-height: calc(${tokens.text.lineHeight.heading.xs} * 1px);
`

const Tab = styled.a`
  cursor: pointer;
  font-weight: bold;
  font-size: calc(${tokens.text.fontSize.body} * 1px);
  line-height: calc(${tokens.text.lineHeight.body} * 1px);
  padding: 13px calc(${tokens.space.layout[30]} * 1px);
  border-top: 2px transparent;

  color: ${tokens.color.text.tertiary.default};
  &:hover {
    color: ${tokens.color.text.tertiary.hover};
  }
  &:active {
    color: ${tokens.color.text.tertiary.press};
  }

  &[aria-selected='true'] {
    color: ${tokens.color.text.default};
    border-top: 2px solid ${tokens.color.border.selected};
    &:hover {
      color: ${tokens.color.text.hover};
    }
    &:active {
      color: ${tokens.color.text.press};
    }
  }
`

const UserCard = styled.div`
  display: grid;
  grid-template-areas:
    'UserInfo     .           ShowAll'
    'ArtworkList  ArtworkList ArtworkList';
`

const UserInfo = styled.div`
  grid-area: UserInfo;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  gap: calc(${tokens.space.layout[20]} * 1px);
`

const User = styled.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: calc(${tokens.radius.oval} * 1px);
  cursor: pointer;

  color: ${tokens.color.icon.default};
  background-color: ${tokens.color.container.secondary.default};
  &:hover {
    color: ${tokens.color.icon.hover};
    background-color: ${tokens.color.container.secondary.hover};
  }
  &:active {
    color: ${tokens.color.icon.press};
    background-color: ${tokens.color.container.secondary.press};
  }
`

const UserName = styled.span`
  color: ${tokens.color.text.default};
  font-size: calc(${tokens.text.fontSize.caption.m} * 1px);
  line-height: calc(${tokens.text.lineHeight.caption.m} * 1px);
  font-weight: bold;
`

const ShowAll = styled.a`
  grid-area: ShowAll;
  cursor: pointer;
  color: ${tokens.color.text.tertiary.default};
  &:hover {
    color: ${tokens.color.text.tertiary.hover};
  }
  &:active {
    color: ${tokens.color.text.tertiary.press};
  }
  text-align: right;
  align-content: center;
  font-size: calc(${tokens.text.fontSize.caption.m} * 1px);
  line-height: calc(${tokens.text.lineHeight.caption.m} * 1px);
`

const ArtworkList = styled.ul`
  grid-area: ArtworkList;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(${tokens.space.layout[20]} * 1px);
  list-style: none;
  padding: 0;
  max-width: 424px;
`

const Artwork = styled.article`
  display: grid;
  gap: calc(${tokens.space.layout[10]} * 1px);
`
const ArtworkThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: calc(${tokens.radius.m} * 1px);
`
const ArtworkTitle = styled.h3`
  color: ${tokens.color.text.default};
  font-size: calc(${tokens.text.fontSize.caption.m} * 1px);
  line-height: calc(${tokens.text.lineHeight.caption.m} * 1px);
  margin: 0;
`
const ArtworkDescription = styled.p`
  margin: 0;
  color: ${tokens.color.text.tertiary.default};
  font-size: calc(${tokens.text.fontSize.caption.s} * 1px);
  line-height: calc(${tokens.text.lineHeight.caption.s} * 1px);
`
