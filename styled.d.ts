// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      primary: string;
      secondary: string;
    };
  }
}
