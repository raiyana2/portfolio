import React from 'react';
import Link from 'next/link';


import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const isExternal = (url='') =>
  url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:');

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree>
              {title}
            </HeaderThree>
            <Hr/>
          
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>  {tag} </Tag>
              ))}
            </TagList>  
          </div>
          <UtilityList>
            {/* visit */}
            {visit && (isExternal(visit)
              ? <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">Learn More</ExternalLinks>
              : (
                <Link href={visit} legacyBehavior>
                  <ExternalLinks>Learn More</ExternalLinks>
                </Link>
              ))}

            {/* source */}
            {source && (isExternal(source)
              ? <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>
              : (
                <Link href={source} legacyBehavior>
                  <ExternalLinks>Code</ExternalLinks>
                </Link>
              ))}
          </UtilityList>
        </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;