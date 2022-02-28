
            const linksSocialMedia = {
                github: "RayantG",
                youtube: "rayantgurgel",
                facebook: "",
                instagram: "rayantgurgel",
                twitter: "rayantgurgel"
                }
                
                function changeSocialMediaLinks()
                {
                    for(let li of socialLinks.children)
                    {
                        const social = li.getAttribute('class');
                        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
                    }
                }
    
                changeSocialMediaLinks();
                

            function getGitHubProfileInfos()
            {
                const url = `https://api.github.com/users/${linksSocialMedia.github}`;

                fetch(url).then(response => response.json()).then(data => {
                    userName.textContent = data.name
                    userLink.href = data.html_url
                    userBio.textContent = data.bio
                    userPic.src = data.avatar_url
                    userGitName.textContent = data.login
                });
                
            }

            getGitHubProfileInfos();