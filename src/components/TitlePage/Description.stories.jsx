import Description from './Description';
import '../../styles/index.css';
import * as Home from '../../pages/Home.stories';

export default {
  component: Description,
  title: 'TitlePage/Description',
  decorators: [
    story => <main className='w-full h-screen bg-gray-800'>{story()}</main>,
  ],
};

const Template = args => <Description {...args} />;

export const Violet = Template.bind({});
Violet.args = {
  ...Home.Default.args.titles[0],
  backgroundURL:
    'https://image.tmdb.org/t/p/original/uKtyR5VqjefVgYQ64Hy1ch2BVFo.jpg',
  overview:
    'The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War\'s final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.\n\nRecovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an "Auto Memoir Doll," amanuenses that transcribe people\'s thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memoir Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.',
};

export const Ergo = Template.bind({});
Ergo.args = {
  ...Home.Default.args.titles[2],
  backgroundURL:
    'https://image.tmdb.org/t/p/original/pocqO2L8PW9xh1oA7ZG3iXh62FL.jpg',
  overview:
    'In a futuristic world almost barren of life, mankind is confined to mechanized domed cities where A.I.’s control all aspects of life. In this world, humans are no longer born, they are manufactured in a production line; and alongside them live androids known as autoreivs. Within one of these domed sanctuaries named Romdeau lives Re-l Mayer, one of a few citizens who aren’t entirely prevented from thinking. Her grandfather\'s prominent position and the affection of the scientist Daedalus have left her more free will than is normally allowed, but Re-l has started to question the sanctity of the city and the citizens\' perfect way of life. With mysterious beings known as proxies causing havoc and a man named Vincent causing great influence on her life, Re-l must travel outside of the city to find the answers she seeks and discover the mystery behind "the awakening".',
};

export const Lustrous = Template.bind({});
Lustrous.args = {
  ...Home.Default.args.titles[5],
  backgroundURL:
    'https://image.tmdb.org/t/p/original/bkNvw8aaWYiOoUpx6mwTx6bDvEF.jpg',
  overview:
    "In the mysterious future, crystalline organisms called Gems inhabit a world that has been destroyed by six meteors. Each Gem is assigned a role in order to fight against the Lunarians, a species who attacks them in order to shatter their bodies and use them as decorations.\n\nPhosphophyllite, also known as Phos, is a young and fragile Gem who dreams of helping their friends in the war effort. Instead, they are told to compile an encyclopedia because of their delicate condition. After begrudgingly embarking on this task, Phos meets Cinnabar, an intelligent gem who has been relegated to patrolling the isolated island at night because of the corrosive poison their body creates. After seeing how unhappy Cinnabar is, Phos decides to find a role that both of the rejected Gems can enjoy. Can Phos's seemingly mundane assignment lead both Phos and Cinnabar to the fulfillment they desire?",
};
