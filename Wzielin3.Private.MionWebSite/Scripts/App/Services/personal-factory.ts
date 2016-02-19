module App.Services {
    "use strict";

    export class PersonalFactory {
        private aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tincidunt leo eu semper.Nullam ac sodales justo. Proin suscipit sed elit vitae mattis.Vestibulum lobortis est nisl, ac viverra leo congue sed. Vivamus tempor, est ac ultrices vehicula, lacus velit maximus dolor, vel faucibus eros ante ac nulla.Etiam a felis erat. Vestibulum id urna eget eros vehicula aliquet. Sed dignissim id odio a pharetra.Integer non turpis id metus congue tincidunt nec vitae risus. Proin id pellentesque libero. Integer varius orci orci, eget molestie erat pulvinar ut. Suspendisse laoreet in turpis a commodo.Mauris elementum turpis in bibendum elementum. Aenean mollis dictum nisl, nec venenatis ipsum dapibus laoreet. Curabitur ac lectus metus.";
        private images = [
            "Data/Images/Personal/personal1.jpg",
            "Data/Images/Personal/personal2.jpg",
            "Data/Images/Personal/personal3.jpg",
            "Data/Images/Personal/personal4.jpg",
            "Data/Images/Personal/personal5.jpg",
            "Data/Images/Personal/personal6.jpg",
            "Data/Images/Personal/personal7.jpg",
        ];
        private contactInfo: Models.Personal.ContactInfo[] = [
            { thumbnailUrl: "Data/Images/Icons/icon-mail.png", name: "E-mail", contactUrl:"mailto:zielinskiwt@outlook.com" },
            { thumbnailUrl: "Data/Images/Icons/icon-linkedin.png", name: "LinkedIn", contactUrl: "https://www.linkedin.com/in/zielinskiwt" },
            { thumbnailUrl: "Data/Images/Icons/icon-facebook.png", name: "Facebook", contactUrl: "https://www.facebook.com/zielinskiwt" },
        ];
        public getAllImages(): string[] {
            return this.images;
        }
        public getAboutMe(): string {
            return this.aboutMe;
        }
        public getContactInfos(): Models.Personal.ContactInfo[] {
            return this.contactInfo;
        }
    }
}