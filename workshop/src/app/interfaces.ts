interface Video {
    id: string;
    title: string;
    author: string;
    viewDetails: ViewDetail[];
  }
  
interface ViewDetail {
    age: number;
    region: string;
    date: string;
}