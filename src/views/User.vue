<template>
  <main class="page your-page">
    <div class="container">
			
			<div class="user pt-5">
				<template v-if="user != null">
					<ul class="list-group">
						<li class="list-group-item">
							<h4>
								Email: {{ user.email }}
							</h4>
						</li>
						<li class="list-group-item">
							<h4>
								Local ID: <small>{{ user.localId }}</small>
							</h4>
						</li>
						<li class="list-group-item">
							<h4>
								Registered: {{ (user.registered == true) ? 'Yes' : 'No' }}
							</h4>
						</li>
					</ul>
				</template>
				<template v-else>
					<h2 class="mt-5">
						<strong>
							Not Logged In
						</strong>
					</h2>
				</template>
			</div>

    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex'; 

export default {
  computed: {
		...mapState(['user'])
  }
}
</script>  