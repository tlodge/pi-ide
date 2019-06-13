import passport  from 'passport';
import passportGithub from 'passport-github';
const GitHubStrategy = passportGithub.Strategy;

export default function initPassport(app, config){
	
	
	const {CLIENT_ID="", CLIENT_SECRET="", CALLBACK=""} = config.github;

	
	if (CLIENT_ID.trim() == "" || CLIENT_SECRET.trim() == "" || CALLBACK.trim() == ""){
		return;
	}
	
	
	var User = require('./models/shimuser');

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(new GitHubStrategy({
    				clientID: config.github.CLIENT_ID,
    				clientSecret: config.github.CLIENT_SECRET,
    				callbackURL: config.github.CALLBACK
  				 },
 
				function(accessToken, refreshToken, profile, cb) {
					const user = User.findOne("githubId", profile.id);
				
						if (user == null){
							console.log("creating new user");
							var newuser = User.save({ 	githubId: profile.id, 
														username: profile.username, 
												 		accessToken: accessToken, 
												 		email:profile.email,
											   		});
							
							return cb(null, newuser);
							
						}else{
							//MUST update here - incase the token has changed
							
							const updateduser = User.update( "githubId" ,profile.id , "accessToken", accessToken);
							return cb(null, updateduser);
							
						}
				}
 	));

	passport.serializeUser(function(user, done) {
  		done(null, user._id);
	});
 
	passport.deserializeUser(function(id, done) {
	  const user = User.findById(id);
	  done(null, user);
	});
}
