import styled from 'styled-components';
import {Pressable, View, Image, Text} from 'react-native';
import {Icon} from '@rneui/themed';

const Wrapper = styled(Pressable)`
  height: 200px;
  background-color: #ffefc7;
  padding: 4px;
  margin: 14px;
  border-radius: 5px;
  border: 1px solid #efc865;
`;

const InnerWrapper = styled(View)`
  background-color: ${({pressed}) => (pressed ? '#efc865' : '#ffefc7')};
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
  background-color: #efc865;
  margin-top: 10px;
`;

export default {Wrapper, InnerWrapper, ImageComp, TextComp, IconComp};
