import styled from 'styled-components';
import {Pressable, View, Image, Text} from 'react-native';
import {Icon} from '@rneui/themed';

const Wrapper = styled(Pressable)`
  height: 200px;
  background-color: lightgrey;
  padding: 4px 6px 8px 2px;
  margin: 2px;
  border-radius: 5px;
`;

const InnerWrapper = styled(View)`
  background-color: ${({pressed}) => (pressed ? 'lightblue' : 'lightgrey')};
  padding: 5px;
  align-items: center;
`;

const ImageComp = styled(Image)`
  width: 120px;
  height: 120px;
  color: blue;
`;

const TextComp = styled(Text)``;

const IconComp = styled(Icon)`
  width: 50px;
  color: white;
  border-radius: 20px;
  background-color: grey;
  margin-top: 10px;
`;

export default {Wrapper, InnerWrapper, ImageComp, TextComp, IconComp};
