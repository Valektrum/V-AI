module.exports = {
    name: 'Headpat',
    description: 'For your degenerate needs.',
    execute(msg) {

        var holyImages = [
            "https://i.redd.it/5a3gqnnjbyb51.jpg",
            "https://i.redd.it/e0oi48673ty41.png",
            "https://i.redd.it/cpiq0s0nw0751.png",
            "https://i.redd.it/vfugt0izju041.jpg",
            "https://www.jappleng.com/application/assets/jspot/images/hd/anime-girl-head-a1db6a0536d200a.jpeg",
            "https://external-preview.redd.it/PpalXKDZvkKuaa65aDwQpNRHCznUNKqSIMo_jCmktXA.png?auto=webp&s=7297117aaec18b3348020f348d27edf491ff33cf",
            "https://external-preview.redd.it/DEWOTt_0TktMxDCHYLhTXXNvncX4e_n_vXUDpgF9LrU.jpg?auto=webp&s=fdb9629d7f3d837d1fa42b0ed77082e6d3b40a97",
            "https://external-preview.redd.it/wtGAQzl3Ha969LH4FY0lvS-luj5eWAKtxttDPArvHAQ.jpg?auto=webp&s=30aaec2da8060d9a7baea8cda577302c833c9f05",
            "https://external-preview.redd.it/ShMEGycA7fwLcLSALKpaTfAGqJom161RyPDGx2xJwDE.jpg?auto=webp&s=5b24fb656a150fe736a15986505878c3f4425cfb",
            "https://external-preview.redd.it/p-uXRc9fB6dG3G-eo_cg9MZA0VZjMoyfn00QbHsRgXk.jpg?auto=webp&s=4018496e5b378bf02c1f8deb9084743676ac5b64",
            "https://external-preview.redd.it/YalsapGolMeFoc4AaAIBXiT8K0L1SRHSDyh-8iZpvlE.png?auto=webp&s=15f0193c58e6eb63c459a1ce6a9aea6d9aa7fac8",
            "https://external-preview.redd.it/Uy7fd5sDlMP7N-3tBjuqCD4DNjQUP_fHXwIsdwPIN8Y.png?auto=webp&s=23164fd68d3e63a2a4d773331710783d22d2dcfb",
            "https://external-preview.redd.it/ssDWHwQh5pTHNx2gd8QQ35zswxxN2_PCHdajpQADbpY.jpg?auto=webp&s=a416e36b04da64dd3df7572ec1e7b139566d90b3",
            "https://i.redd.it/9zjga5mds7n41.jpg",
            "https://external-preview.redd.it/ckmCHbdg0LzlgfCsu8xIxQGdmKPR7z0iz5zcgQLd8Jk.jpg?auto=webp&s=82761f0f1319502556dc1cb79ead18f997f72baf",
            "https://external-preview.redd.it/eIdI3Mi-1UFKXhqXGFDdZ1wQ8_4-r91Yqw0WhNh6IRM.jpg?auto=webp&s=4efd9827ca5f0f9755a471da94888c9dcd8b1b71",
            "https://external-preview.redd.it/UfRVMGPNmDgagfZ3_-d-zmL2uvZPBwY2XUCcnHurFAg.jpg?auto=webp&s=ac74eced2d886b3f1dad22e4f73c936b42d54305",
            "https://external-preview.redd.it/txBci8SswPIRrE0h49_ozHFPkbPnwgSJcEETrV4QZo0.jpg?auto=webp&s=14a558fe6d8b66ddea537805bd58a4bd63f7ce2d",
            "https://image.myanimelist.net/ui/2YIpTa2PtH9T744VwzZ3FJlmgvdHWJvde1lmn8hOsb-EAqezGHNWjBb7Bjx0NFEiYgjA3KZ0jXIAgiRlmrR_uNbhC3sm_KGVM1nO6Pmx8wTlgZ-NcP2OBBuvEk6b3ozp",
            "https://cdn130.picsart.com/290315742022201.gif",
            "https://tenor.com/6w8H.gif",
            "https://tenor.com/bfNY0.gif",
            "https://tenor.com/YAN5.gif",
            "https://tenor.com/FrgB.gif",
            "https://tenor.com/bd2ix.gif",
            "https://tenor.com/3TW9.gif",
            "https://tenor.com/u22V.gif",
            "https://tenor.com/bfEG6.gif",
            "https://tenor.com/bfEJ1.gif",
            "https://tenor.com/bl4gv.gif",
            "https://tenor.com/bfEJw.gif",
            "https://tenor.com/bfbMZ.gif",
            "https://tenor.com/bkhhS.gif",
            "https://tenor.com/blwqN.gif",
            "https://external-preview.redd.it/5Q3VkXm245u2oApSXfz33yJW_cpc9jU_XzESVCRGUDg.png?auto=webp&s=c59a4cdfc5f9cf44b2217290c4d2f1d906e51c18",
            "https://external-preview.redd.it/9WC5aSBo712yuhXrER2yKAFAbpW6W8Rd6hxoT_NHQ6o.jpg?auto=webp&s=17d31db129a0a82ff022cd166b5351cf3ed1ce4a",
            "https://external-preview.redd.it/AZ-5NBhmB1_Xj209I0S2VFn_VisURgS-jvPFeuH4Ihc.jpg?auto=webp&s=cc9c65b8a7380498c9fc5b7c2a2738a7bd68b0d0",
            "https://external-preview.redd.it/pFv3yY405M7QReGoPwb2VVYkLgiZiie7sR0Diocm0cA.jpg?auto=webp&s=71f6c022c1545ddbe198fa4bbd1c5ee1e22e3a7a",
            "https://external-preview.redd.it/LOjvLQikrzR2LF9wuI6v-k347yt7Wtou_-nTB_AQDTk.png?auto=webp&s=3a9146271663e39358b01aebc14e071f23f25866",
            "https://external-preview.redd.it/zE9S7N6BucSCohK7L0S7H2arg32mo3JagyF0MogQm3k.jpg?auto=webp&s=d884b2aa4a9c19e4aeb064c49411d3c184db99ef",
            "https://external-preview.redd.it/JqpTc3EpoITdMtM8jM9HbUvUPqjS8fsAg3Ht5vA3ig4.jpg?auto=webp&s=0ff5dcbe9b65a2dd74f72d50d943e9989102dd99",
            "https://cdn155.picsart.com/227838839007202.gif?to=min&r=640",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be80847b-d9b6-45e5-810a-eab2204239be/ddistqd-f9009569-669b-4e73-a2d3-13c25976ecea.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmU4MDg0N2ItZDliNi00NWU1LTgxMGEtZWFiMjIwNDIzOWJlXC9kZGlzdHFkLWY5MDA5NTY5LTY2OWItNGU3My1hMmQzLTEzYzI1OTc2ZWNlYS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ebNqy6W8sQBWkCLbQ6jpCwbaxfWW9hbZ-kzq1bJa2ZA",
            "https://archive-media-0.nyafuu.org/c/image/1467/14/1467145183120.gif",
            "https://i.pinimg.com/originals/8a/79/0d/8a790d644c3166e57baf341fdaa6af5d.gif",
            "https://www.kindpng.com/picc/m/74-749030_dont-pat-my-head-pat-anime-png-transparent.png",
            "https://image.myanimelist.net/ui/G-Sm6d0qIwQxUGHIp-m2WCOhDV3sqW-8WrJAKsDP3yiSDm8bni5Jqg5SU-AeByeeG91q9dweec0oWk0l9gkfnZQVtKHrEm29oo32BF9YUb7LiExfj-mp5r1COz6CBGTA",
            "https://thumbs.gfycat.com/MinorGleefulHairstreakbutterfly-size_restricted.gif",
            //not a headpat
            "https://media1.tenor.com/images/4414192f922f79cd977222f26d31c38c/tenor.gif?itemid=15876255"
        ]
        var r = Math.floor(Math.random() * holyImages.length);

        return msg.channel.send(holyImages[r]);

    }


}
