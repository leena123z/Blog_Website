# Your Journal — setup guide

No coding or command line needed. Everything below happens in your browser.

## 1. Put the files on GitHub
1. Go to github.com and create a free account (if you don't have one).
2. Click the "+" in the top right → "New repository". Name it something like `my-journal`. Keep it Public. Click "Create repository".
3. On the new repo page, click "uploading an existing file".
4. Drag in every file and folder from this project (keep the folder structure intact) and click "Commit changes".

## 2. Deploy it on Netlify
1. Go to netlify.com and sign up (you can sign up with your GitHub account — this makes step 3 easier).
2. Click "Add new site" → "Import an existing project" → "Deploy with GitHub".
3. Pick the `my-journal` repository. Netlify will detect the build settings automatically (from `netlify.toml`). Click "Deploy site".
4. Wait a minute or two. Netlify gives you a live web address like `https://random-name-123.netlify.app` — this is your public blog.

## 3. Turn on your private login
1. In your Netlify site dashboard, go to "Site configuration" → "Identity" → click "Enable Identity".
2. Under Identity settings, set registration to "Invite only" — this is what keeps everyone else from posting.
3. Scroll to "Services" → "Git Gateway" → click "Enable Git Gateway". This lets the admin panel save posts to your GitHub repo for you.
4. Go to the "Identity" tab at the top → "Invite users" → enter your own email address. Check your inbox for the invite email and click the link to set your password.

## 4. Write your first post
1. Visit `https://your-site-name.netlify.app/admin` and log in with the account you just created.
2. Click "New Post", fill in a title and your writing, then click "Publish".
3. Netlify rebuilds your site automatically (takes about a minute) and your new entry appears on the homepage.

## Everyday use
- To write: go to `/admin` on your site and log in.
- To read: anyone can visit your main site address — no login needed, no editing possible.
- To change the design: edit `src/style.css`.
- To rename your site: go to Site configuration → General → "Change site name" in Netlify, or add your own domain there too.
